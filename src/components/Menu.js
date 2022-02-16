import {useState} from "react"
import { BiMenuAltRight } from "react-icons/bi"
import { Link } from "react-router-dom";
import { navbar } from "../data/navbar";

// set up state values which is going to control whether header is open or closed
const Menu = () => {
	const [isOpen, setIsOpen] = useState(false)
	const [links, setLinks] = useState(navbar)

// isOpen is state value and setIsOpen is function. This function controls how we access this state value.state value set to false by default
  return (
		<>
			<div className="menu-btn">
				<button onClick={() => setIsOpen(!isOpen)}>
					<BiMenuAltRight />
				</button>
			</div>
			{/* check whether isopen is set to true */}
			<header className={`${isOpen ? "header open" : "header"}`}>
				<nav>
					<ul>
					{links.map((link) => {
				const {id, title, url} = link	
				
				return (
					<li key={id} onClick={() => setIsOpen(false)}>
						<Link to={url}>{title}</Link>
					</li>
				)
})}
					</ul>
				</nav>
			</header>
		</>
	);
}

export default Menu;