import settings from '../../settings.json';

const { rewards_card } = settings;

export function RewardsCard({ cardImage, withLink }) {
    return (
        <div className='rewards-card'>
            <h2 className='rewards-card__title'>{rewards_card.title}</h2>
            <h6 className='rewards-card__subtitle'>{rewards_card.sub_title}</h6>
            {withLink && <div className="finance-link">{rewards_card.link}</div>}
            <img src={cardImage} alt="Rewards card" />
        </div>
    )
}