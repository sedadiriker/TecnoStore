import "./Contact.css"
import { CiTwitter } from "react-icons/ci";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";


const Contact = () => {

 
  return (
    <div className="contact ">
      <div className="contact bg-body-tertiary text-center">
        <h2 className="text-center">TecnoStore</h2>
        <p className="w-75 mx-auto text-center">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione nostrum, commodi neque voluptatibus illo fugiat nam perspiciatis quisquam deleniti quasi cumque fugit, dignissimos voluptate debitis illum dolor accusantium laboriosam odio aut? Praesentium natus dignissimos quis nihil deserunt mollitia laudantium alias porro cupiditate quibusdam totam deleniti debitis, autem pariatur, iure maiores!</p>
        <div className="fs-2 d-flex gap-4 justify-content-center">
        <CiTwitter role="button" className="icon rounded-circle bg-body-secondary" />
        <FaFacebookF role="button" className="icon rounded-circle bg-body-secondary" />
        <FaInstagram role="button" className="icon rounded-circle bg-body-secondary" />

        </div>
        <a href="https://github.com/sedadiriker" target="_blank" className="btn btn-success mt-4">Message</a>

      </div>
    </div>
  )
}

export default Contact
