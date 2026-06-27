export function Profile(){
    return (
        <img src="https://react.dev/images/docs/scientists/QIrZWGIs.jpg" alt="ALan L. Hart" />
    );
}

export default function Gallery(){
    return (
        <section>
            <h1>Amazing Scientist</h1>
            <Profile/>
            <Profile/>
            <Profile/>
        </section>
    );
}