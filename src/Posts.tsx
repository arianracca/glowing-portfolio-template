export interface Post {
  title: string;
  content: string;
  image: string;
}

const posts: Post[] = [
  {
    title: "Post 1",
    // Content allows HTML
    content: `
    <p>
    Lorem Ipsum è un testo segnaposto utilizzato nelsettore
    della tipografia e della stampa. Lorem Ipsum è considerato il
    testo segnaposto standard sin dal sedicesimo secolo, quando un
    anonimo tipografo prese una cassetta di caratteri e li assemblò
    per preparare un testo campione.
    </p>
    <br>
    È sopravvissuto non solo
    a più di cinque secoli, ma anche al passaggio alla videoimpaginazione,
    pervenendoci sostanzialmente inalterato. Fu reso popolare, negli anni
    ’60, con la diffusione dei fogli di caratteri trasferibili “Letraset”,
    che contenevano passaggi del Lorem Ipsum, e più recentemente da software
    di impaginazione come Aldus PageMaker, che includeva versioni del Lorem
    Ipsum. Lorem Ipsum è un testo segnaposto utilizzato nel settore della
    tipografia e della stampa. Lorem Ipsum è considerato il testo segnaposto 
    standard sin dal sedicesimo secolo, quando un anonimo tipografo prese una
    cassetta di caratteri e li assemblò per preparare un testo campione. È 
    opravvissuto non solo a più di cinque secoli, ma anche al passaggio alla
    videoimpaginazione, pervenendoci sostanzialmente inalterato. Fu reso popolare,
    negli anni ’60, con la diffusione dei fogli di caratteri trasferibili “Letraset”,
    che contenevano passaggi del Lorem Ipsum, e più recentemente da software di
    impaginazione come Aldus PageMaker, che includeva versioni del Lorem Ipsum.
    Lorem Ipsum è un testo segnaposto utilizzato nel settore della tipografia e
    della stampa. Lorem Ipsum è considerato il testo segnaposto standard sin dal
    sedicesimo secolo, quando un anonimo tipografo prese una cassetta di caratteri
    e li assemblò per preparare un testo campione. È sopravvissuto non solo a più
    di cinque secoli, ma anche al passaggio alla videoimpaginazione, pervenendoci
    sostanzialmente inalterato. Fu reso popolare, negli anni
    ’60, con la diffusione dei fogli di caratteri trasferibili “Letraset”,
    che contenevano passaggi del Lorem Ipsum, e più recentemente da software di
    impaginazione come Aldus PageMaker, che includeva versioni del Lorem Ipsum.
    Lorem Ipsum è un testo segnaposto utilizzato nel settore della tipografia e
    della stampa. Lorem Ipsum è considerato il testo segnaposto standard sin dal
    sedicesimo secolo, quando un anonimo tipografo prese una cassetta di caratteri
    e li assemblò per preparare un testo campione. È sopravvissuto non solo a più
    di cinque secoli, ma anche al passaggio alla videoimpaginazione, pervenendoci
    sostanzialmente inalterato. Fu reso popolare, negli anni ’60, con la diffusione
    dei fogli di caratteri trasferibili “Letraset”, che contenevano passaggi del
    Lorem Ipsum, e più recentemente da software di impaginazione come Aldus PageMaker,
    che includeva versioni del Lorem Ipsum.`,
    image: "https://via.placeholder.com/500",
  },
  {
    title: "Post 2",
    content:
      "Praesent eget massa sapien. Cras venenatis lorem in orci varius euismod. Curabitur tincidunt neque id turpis bibendum eleifend.",
    image: "https://via.placeholder.com/300",
  },
  // Add more posts
];

export default posts;
