export default function Character({head, torso, legs}) {
    return (
        <section style={{backgroundColor: 'black', display: 'flex', flexDirection: 'column'}}>
            <article aria-label='head' style={{
                backgroundImage: `url(./${head}-head.png)`,
                margin: '0 auto',
                height: 300,
                width: 300,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
            }}
            ></article>

            <article aria-label='torso' style={{
                backgroundImage: `url(./${torso}-torso.png)`,
                margin: '0 auto',
                height: 300,
                width: 300,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
            }}
            ></article>
           
           <article aria-label='legs'style={{
                backgroundImage: `url(./${legs}-legs.png)`,
                margin: '0 auto',
                height: 300,
                width: 300,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
            }}
            ></article>

        </section>
    )
}