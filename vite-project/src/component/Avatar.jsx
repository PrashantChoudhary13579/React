export default function Avatar(){
    const avatar = 'https://tse1.mm.bing.net/th/id/OIP.NqFYgMiuHbc_byT2CPCHAgHaJ8?pid=Api&P=0&h=180';
    const description = 'Avatar movie';

    return (
        <img 
            className='avatar' 
            src={avatar} 
            alt={description} 
        />
    );
}