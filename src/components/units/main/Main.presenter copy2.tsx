import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import * as S from "./Main.styles";

export default function MainUI() {
  return (
    <S.Container>
      {/* <S.Page1><S.Carousel></S.Carousel></S.Page1>
      <S.Page2>
        <img src="/img/ink.png" />
        <S.Image src="/img/ink.png" />
      </S.Page2> */}

      <S.Image />
      {/* <S.Contents>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ligula
        orci, rhoncus eu molestie id, bibendum non lorem. Nam eget commodo eros.
        Praesent ac mi maximus, pulvinar nibh eget, sollicitudin lorem. Praesent
        enim mi, mattis a gravida vitae, condimentum eget sem. Nam venenatis
        rutrum justo. Ut lobortis elementum bibendum. Praesent tempus metus nec
        purus mollis ornare. Proin et turpis in odio aliquet hendrerit.
        Curabitur nec leo vitae elit pretium vestibulum. Fusce vestibulum
        vehicula lectus, et efficitur eros. Pellentesque aliquam elit sit amet
        nibh laoreet commodo a ac mauris.
      </S.Contents> */}
      <S.Image2 />
      {/* <S.Contents>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ligula
        orci, rhoncus eu molestie id, bibendum non lorem. Nam eget commodo eros.
        Praesent ac mi maximus, pulvinar nibh eget, sollicitudin lorem. Praesent
        enim mi, mattis a gravida vitae, condimentum eget sem. Nam venenatis
        rutrum justo. Ut lobortis elementum bibendum. Praesent tempus metus nec
        purus mollis ornare. Proin et turpis in odio aliquet hendrerit.
        Curabitur nec leo vitae elit pretium vestibulum. Fusce vestibulum
        vehicula lectus, et efficitur eros. Pellentesque aliquam elit sit amet
        nibh laoreet commodo a ac mauris.
      </S.Contents> */}

      {/* <Parallax pages={3}>
        <ParallaxLayer
          offset={1}
          speed={1}
          // style={{ backgroundColor: "#232946" }}
        />
        <S.RuminousTitle>
          <img src="/img/main/roomin.png" />
        </S.RuminousTitle>
        <S.RuminousTitleUs>
          <img src="/img/main/us.png" />
        </S.RuminousTitleUs>
        <ParallaxLayer
          offset={2}
          speed={1}
          // style={{ backgroundColor: "#8bd3dd" }}
        />
        <ParallaxLayer offset={1} speed={-0.2} style={{ opacity: 1 }}>
          <img
            alt="cloud"
            src="https://freepngimg.com/thumb/cloud/7-cloud-png-image.png"
            style={{ width: "50%", marginLeft: "20%" }}
          />
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={0.8} style={{ opacity: 0.8 }}>
          <img
            alt="cloud"
            src="https://freepngimg.com/thumb/cloud/7-cloud-png-image.png"
            style={{ display: "block", width: "50%", marginLeft: "55%" }}
          />
          <S.Image src="/img/main/ink.png" />
          <img
            alt="cloud"
            src="https://freepngimg.com/thumb/cloud/7-cloud-png-image.png"
            style={{ display: "block", width: "40%", marginLeft: "15%" }}
          />
        </ParallaxLayer>
        <ParallaxLayer offset={2} speed={0} style={{ opacity: 0.6 }}>
          <img
            alt="cloud"
            src="https://freepngimg.com/thumb/cloud/7-cloud-png-image.png"
            style={{ display: "block", width: "50%", marginLeft: "10%" }}
          />
          <img
            alt="cloud"
            src="https://freepngimg.com/thumb/cloud/7-cloud-png-image.png"
            style={{ display: "block", width: "40%", marginLeft: "55%" }}
          />
          <img
            alt="cloud"
            src="https://freepngimg.com/thumb/cloud/7-cloud-png-image.png"
            style={{ display: "block", width: "30%", marginRight: "55%" }}
          />
        </ParallaxLayer>
      </Parallax> */}
    </S.Container>
  );
}