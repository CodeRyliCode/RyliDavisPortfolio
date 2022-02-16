import {FaPhone, FaEnvelope} from "react-icons/fa"
const Contacts = () => {
  return (
		<>

			<section className="contacts">
							<h1>Contact Me</h1>

				<ul>
					<li>
						<a href="tel:2099868880"><FaPhone/>(209) 986-8880</a>
					</li>
					<li>
						<a href="mailto:rylidavis94@gmail.com"><FaEnvelope />{" "}rylidavis94@gmail.com</a>
					</li>
				</ul>
			</section>
		</>
	);
}

export default Contacts