import React from 'react'
import s from './Projects.module.scss';
import { Title } from '../../common/Parts/Title/Title';
import { ProjectCard } from '../ProjectCard/ProjectCard';
import { arrProjects } from '../../assets/data/data-projects';


export function Projects() {

    return (
        <section className={s.projects} id='projects'>
            <div className="container">

                <Title text={'My Projects'} />

                <div className={s.wrap}>
                    {
                        arrProjects.map((p) => (
                            <ProjectCard
								key={p.id}
								bg={p.image}
								theme={p.theme}
								href={p.href}
								description={p.description}
                            />
                        ))
                    }
                </div>
            </div>
        </section>
    )
}