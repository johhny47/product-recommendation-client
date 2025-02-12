import error from '../assets/error.jpg'
const ErrorPage = () => {
    return (
        <div className="text center h-[500px] w-[500px] mx-auto">
            
            <img src={error} className='h-[500px] w-[500px]' alt="error" />
        </div>
    );
};

export default ErrorPage;