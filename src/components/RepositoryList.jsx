import { RepositoryItem } from './RepositoryItem'

const repository = {
    name: 'unform',
    description: 'Forms in React',
    link: 'https://github.com/unform/unform'
}

export function RepositoryList(){
    return (
    <div>
        <h1>Lista de Repositoriso</h1>
        <ul>
            
            <RepositoryItem repository={repository} />
            <RepositoryItem repository={repository} />
            <RepositoryItem repository={repository} />
            <RepositoryItem repository={repository} />
            
        </ul>
    </div> );
    
}