process.env.PORT = 0; // Use a random available port

const request = require("supertest");
const app = require("../index"); // Import app directly

describe("Express Server Tests", () => {
    it("should return JSON data with status 200", async () => {
        const response = await request(app).get("/api/v1/data");

        expect(response.status).toBe(200);
        expect(response.headers["content-type"]).toMatch(/json/);
        expect(response.body).not.toBeNull();
        expect(Array.isArray(response.body.items)).toBe(true);
    });

    // Test the GET /api/v1/data endpoint for error conditions
    it("should return 500 and error message on failure", async () => {
        // Temporarily mock require to simulate a failure
        jest.mock("../data/data.json", () => {
            throw new Error("Data file not found");
        });

        const response = await request(app).get("/api/v1/data");
        expect(response.status).toBe(500);
        expect(response.body).toHaveProperty("message");
        expect(response.body.message).toBe("Data file not found");
    });
});
