import './styles.css';

type Props = {
    title: string;
}

export default function Body({title} : Props){
    
    return (
        <div className="body">
            <h2>{title}</h2>
        </div>
    );
}