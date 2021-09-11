import FavoriteIcon from '@material-ui/icons/Favorite';
import "../components/Footer.css"
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const Footer = () => {
    return <div className="footer">
        <h3>Made with <FavoriteIcon /> by Sarvesh Limaye </h3> 
        <p> <a className="giticon" href="https://github.com/SarveshLimaye">
          <GitHubIcon/>
      </a>
      <a className="instaicon" href="https://www.linkedin.com/in/sarvesh-limaye-7a922620b">
          <InstagramIcon/>
      </a>
      <a  href="https://www.instagram.com/sarvesh0507/">
          <LinkedInIcon/>
      </a>
        </p>

    </div>
}

export default Footer