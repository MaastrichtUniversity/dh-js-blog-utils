import styled from "styled-components";
// import Roadmap from "../../assets/illustrations/blog/Agile_roadmap.svg";
// import General from "../../assets/illustrations/blog/General.svg";
// import ReleaseNotes from "../../assets/illustrations/blog/Release_notes.svg";
// import Sprint from "../../assets/illustrations/blog/Sprint_summary.svg";
import { Link } from "react-router-dom";
import { device } from "./assets/breakpoints";

export default function Article(props) {
  /* Format the date from Confluence to more readable format.
    From "2023-07-25" to "July 25, 2023"
  */
  function formatDate(dateString) {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const [year, month, day] = dateString.split("-");
    const formattedDate = `${months[Number(month) - 1]} ${Number(
      day
    )}, ${year}`;
    return formattedDate;
  }

  const formattedDate = formatDate(props.date);

  let backgroundImage;

  // if (props.type === "Sprint summary") {
  //   backgroundImage = Sprint;
  // } else if (props.type === "Roadmap") {
  //   backgroundImage = Roadmap;
  // } else if (props.type === "Release notes") {
  //   backgroundImage = ReleaseNotes;
  // } else {
  //   backgroundImage = General;
  // }

  return (
    <ArticleLink to={"/blog/" + props.id}>
      <ArticleContainer>
        {/* <Image background={backgroundImage} /> */}
        <Header>
          <Type>{props.type}</Type>
          <Date>{formattedDate}</Date>
        </Header>
        <Title>{props.title}</Title>
        <Body>{props.summary}</Body>
      </ArticleContainer>
    </ArticleLink>
  );
}

export const ArticleLink = styled(Link)`
  transition: all 0.5s ease;
  padding-right: 0.625rem;
  padding-left: 0.625rem;
  @media ${device.mobileL} {
    flex: 0 0 33.3333%;
    max-width: 33.3333%;
  }
  &:hover {
    opacity: 0.6;
  }
`;

const ArticleContainer = styled.div`
  max-width: 100%;
  margin-bottom: 50px;
`;

export const Image = styled.div`
  // background-image: url(${(props) => props.background});
  width: 100%;
  height: 150px;
  background-size: contain;
  background-repeat: no-repeat;
  margin-bottom: 16px;
  background-position: center;
`;
const Type = styled.h5`
  font-size: 0.6875rem;
  font-weight: 500;
  color: #6a6788;
  text-transform: uppercase;
  letter-spacing: 1.1px;
  transition: color 0.25s ease;
`;

const Title = styled.h4`
  font-size: 1.5rem;
  font-weight: 700;
  color: #050038;
  letter-spacing: -0.5px;
  margin: 8px 0;
`;
const Body = styled.p`
  font-size: 1em;
  font-weight: 600;
  color: rgb(106, 103, 136);
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Date = styled.p`
  font-size: 0.8rem;
  color: rgb(106, 103, 136);
`;
