interface Project {
  id: number;
  title: string;
  image: {
    main: string;
    sub: string;
  };
  category: string;
  description: string;
  tags: string[];
  url?: string;
  source: string;
}

function PortfolioWorks() {
  return;

}

export default PortfolioWorks
