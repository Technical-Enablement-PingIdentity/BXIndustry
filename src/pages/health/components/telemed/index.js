import settings from '../../settings.json';

const { telemed } = settings;

export function Telemed({ image, withLink }) {
    return (
        <div className='telemed'>
            <h2 className='telemed__title'>{telemed.title}</h2>
            <h6 className='telemed__subtitle'>{telemed.sub_title}</h6>
            {withLink && <div className="health-link">{telemed.link}</div>}
            <img src={image} alt="Telemed" />
        </div>
    )
}