import twitter from "../assets/social/twitter.png"
import linkedin from "../assets/social/linkedin.png"
import instagrm from "../assets/social/instagram.png"
import github from "../assets/social/github.png"
import discord from "../assets/social/discord.png"

function SocialIcons() {
    return (
        <div>
            <a href="https://twitter.com/TinkerHub" target="_blank" rel="noreferrer">
                <img src={twitter} alt="twitter" />
            </a>
            <a href="https://www.linkedin.com/company/tinkerhub-cucek/about/" target="_blank" rel="noreferrer">
                <img src={linkedin} alt="linkedin" />
            </a>
            <a href="https://www.instagram.com/tinkerhub.cucek/" target="_blank" rel="noreferrer">
                <img src={instagrm} alt="instagram" />
            </a>
            <a href="https://github.com/TinkerHub-CUCEK/" target="_blank" rel="noreferrer">
                <img src={github} alt="github" />
            </a>
            <a href="https://discord.gg/K4jQrE3yrt" target="_blank" rel="noreferrer">
                <img src={discord} alt="discord" />
            </a>
        </div>
    )
}

export default SocialIcons