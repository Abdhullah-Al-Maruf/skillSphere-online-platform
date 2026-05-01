
import {Card, Link} from "@heroui/react";

const TipsCard = ({icon,title,paragraph,href  }) => {
    return (
           <Card className="border">
            <p className="bg-[#fff5eb] rounded-xl text-orange-500 w-fit p-2 shadow">{icon} </p>
      <Card.Header>
        <Card.Title>{title}</Card.Title>
        <Card.Description className="text-[#5a4136]">
          {paragraph}
        </Card.Description>
      </Card.Header>
      <Card.Footer>
            <Link
          href={href}
          rel="noopener noreferrer"
          target="_blank"
          className='text-[#5a4136]'
        >
            Read Article
          <Link.Icon  aria-hidden="true" />
        </Link>
      </Card.Footer>
    </Card>
    );
};

export default TipsCard;