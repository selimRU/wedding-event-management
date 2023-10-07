import { useEffect, useState } from "react";
import WorksCard from "./WorksCard";


const Works = () => {
    const [works, setWorks] = useState([]);

    useEffect(() => {
        fetch('works.json')
            .then(res => res.json())
            .then(data => {
                setWorks(data)
            })
    }, [])
    return (
        <div>
            <h2 className=" text-3xl font-semibold text-center">Some of Our Works</h2>
            <div className=" grid lg:grid-cols-2 gap-5 max-w-6xl mx-auto py-5">
                {
                    works.map(work => <WorksCard key={work.id} work={work}></WorksCard>)
                }
            </div>
        </div>
    );
};

export default Works;