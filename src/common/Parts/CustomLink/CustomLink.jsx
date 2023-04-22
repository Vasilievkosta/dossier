import { Link } from 'react-scroll'

export const CustomLink = ({ children, link }) => {
    return (
        <Link
            to={link}
            spy={true}
            smooth={true}
            hashSpy={true}
            offset={0}
            duration={500}
        >
            {children}
        </Link>
    )
}