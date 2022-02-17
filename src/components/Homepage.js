import { FaGithub, FaLinkedin } from "react-icons/fa";
const Homepage = () => {
	return (
		<>
			<section className="homepage">
				<div className="overlay">
					<h1>Ryli Davis</h1>
					<p>Full Stack Web Developer</p>

					<ul>
						<li>
							<a
								href="https://github.com/CodeRyliCode/"
								target="_blank"
								rel="noopenner noreferrer"
							>
								{/* this code will make the link open in a new tab: target="_blank" rel="noopenner noreferrer */}
								{"Github "}
								<FaGithub />
							</a>
						</li>
						<li>
							<a
								href="https://www.linkedin.com/in/ryli-davis-b48354130/"
								target="_blank"
								rel="noopenner noreferrer"
							>
								{"LinkedIn "}
								<FaLinkedin />
							</a>
						</li>
					</ul>
					<a
								href="./images/FullstackCertificate.pdf
								"
								target="_blank"
								rel="noopenner noreferrer"
							><h4>Nucamp Fullstack Certificate</h4></a>
				</div>
			</section>
		</>
	);
};

export default Homepage;
