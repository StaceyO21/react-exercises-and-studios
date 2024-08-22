export default function hobbyLinks () {
    const hobbyLinks = [
        "https://www.truecrimeobsessed.com/", 
        "https://harleyrace.com/"
        ];
        const hobbyPics = [
            "https://images.squarespace-cdn.com/content/v1/5c213a383c3a53bf091b1c36/db853985-4ffd-407f-b82b-74bbada473bf/OB.png",
            "https://scontent.fcps1-1.fna.fbcdn.net/v/t39.30808-6/326243326_1404814243600104_1522718519978796773_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=Bj_zGwHBxtkQ7kNvgGMfrdr&_nc_ht=scontent.fcps1-1.fna&oh=00_AYAPvxOhmPNmtyo04pf_JSUQZ3LEY2LYUHE9L2XTF2ACMg&oe=66CD45C4"          ];
        return(
            <div>
                <p>
            <a href = {hobbyLinks[0]}>"True Crime"</a>
            <img src={hobbyPics[0]} alt="True Crime Podcasts"/>
            </p>
            <p>
            <a href = {hobbyLinks[1]}>"Wrestling"</a>
            <img src={hobbyPics[1]} alt="Harley Race's World League Wrestling"/>
            </p>
            </div>
        );
}