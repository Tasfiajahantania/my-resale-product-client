import './Spinner.css';
const Spinner = () => {
    return (
        <div className='flex justify-center items-center h-full spinner'>
            <progress className="progress w-56"></progress>
        </div>
    )
}

export default Spinner