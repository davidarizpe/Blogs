export default interface Blog {
  id: number;
  title: string;
  description: string;
  classification: {
    type: string;
    background: string;
    color: string;
  }[];
  author: {
    name: string;
    avatar?: string;
  };
  date: string;
  content?: string;
}
