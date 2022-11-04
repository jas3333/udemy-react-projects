import { HiOutlineChevronDoubleRight } from 'react-icons/hi2';

const Job = ({ company, duties, title, dates }) => {
    return (
        <div className='container-col resize-md margin-top-lg '>
            <h2 className='center'>{title}</h2>
            <div className='underline-lg white margin-top-sm'></div>
            <h3 className='light'>{dates}</h3>
            <h4>{company}</h4>
            {duties.map((duty, index) => {
                return (
                    <div key={index} className='container-row center '>
                        <h3 className='margin-right-sm '>
                            <HiOutlineChevronDoubleRight />
                        </h3>
                        <p>{duty}</p>
                    </div>
                );
            })}
        </div>
    );
};

export default Job;
