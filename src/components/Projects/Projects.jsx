import React from 'react'
import { ProjectCard } from '../ProjectCard/ProjectCard';
import { arrProjects } from '../../assets/data/data-projects';
import s from './Projects.module.css';

export function Projects() {

    return (
        <section className={s.projects}>
            <div className="container">
                <h2 className="title">My Projects</h2>
                <div className={s.wrap}>
                    {
                        arrProjects.map((p) => (
                            <ProjectCard key={p.id} bg={p.image}
                                theme={p.theme} description={p.description}
                            />
                        ))
                    }
                </div>
            </div>
        </section>
    )
}