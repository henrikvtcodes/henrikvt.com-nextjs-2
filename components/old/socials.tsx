import Link from "next/link";
// import Icon from "supercons";
import * as Icon from "react-feather";



const SocialBlock = (flexClass:any) => {

    const iconSize:number = 48

    return (
      <nav className="mt-2 mb-2">
        <span className=" hover:cursor-pointer hover:text-black  my-4 mx-8 ">
          <Link href="https://github.com/henrikvtcodes" passHref>
            <Icon.GitHub size={iconSize} />
          </Link>
        </span>
        <span className=" hover:cursor-pointer my-4 mx-8 hover:text-blue-twitter ">
          <Link href="https://twitter.com/henrik_tech" passHref>
            <Icon.Twitter size={iconSize} />
          </Link>
        </span>
        <span className=" hover:cursor-pointer my-4 mx-8 hover:text-purple-instagram ">
          <Link href="https://instagram.com/henrik_tech" passHref>
            <Icon.Instagram size={iconSize} />
          </Link>
        </span>
        <span className=" hover:cursor-pointer my-4 mx-8 hover:text-purple-twitch ">
          <Link href="https://twitch.tv/henriktech" passHref>
            <Icon.Twitch size={iconSize} />
          </Link>
        </span>
        <span className=" hover:cursor-pointer my-4 mx-8 hover:text-purple-twitch ">
          <Link href="mailto:henrik@henrikvt.com?subject=Mail from Our Site" passHref>
            <Icon.Mail size={iconSize} />
          </Link>
        </span>
      </nav>
    );
}



export default SocialBlock;