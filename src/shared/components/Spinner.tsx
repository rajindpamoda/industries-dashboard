const Spinner = () => {
    return (
        <div className="fixed top-0 left-0 w-screen h-screen flex justify-center items-center bg-opacity-90 bg-white z-50">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
        </div>
    );
}

export default Spinner;
