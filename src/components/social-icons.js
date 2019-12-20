/*
import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faFacebook, faGithub, faLinkedin, faInstagram} from '@fortawesome/free-brands-svg-icons'

const getIcon = (name) => {
    switch(name.toLowerCase()) {
        case 'facebook':
        return faFacebook;
        case 'twitter':
        return faTwitter;
        case 'github':
        return faGithub;
        case 'linkedin':
        return faLinkedin;
        case 'instagram':
        return faInstagram;                                         
        default:
        return '';
    }   
}

const IconLink = ({icon, className, size}) => {
    return <a href={`${icon.link}`} target="_blank" rel="noopener noreferrer" className={className}><FontAwesomeIcon icon={getIcon(icon.name)} size={size} /></a>
}

const SocialIcons = ({className, size, icons}) => {
    const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
            socialLinks {
                name
                link
            }
        }
      }
    }
    `)   
    const {socialLinks} = data.site.siteMetadata;
    return(
        <>
            {socialLinks.filter(icon => icons.indexOf(icon.name.toLowerCase())>-1).map((icon) => (
                <IconLink key={icon.name} icon={icon} className={className} size={size} />
            ))}
        </>
    )
}

SocialIcons.propTypes = {
    icons: PropTypes.array.isRequired
  }
  
  SocialIcons.defaultProps = {
    icons: [],
}

export default SocialIcons
*/