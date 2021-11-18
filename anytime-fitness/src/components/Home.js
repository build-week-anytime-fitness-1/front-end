import fitness from '../images/fitness.jpg'


export default function Home(){
    return(
        <div className='home'>
            <img src={fitness} alt='fitness' />
            <h1>Every moment I live is agony</h1>
            <p>
            THESE DAYS, FITNESS CLASSES CAN BE HELD ANYWHERE- A PARK, AN UNFINISHED BASEMENT OR A GARAGE- NOT JUST AT A TRADITIONAL GYM. CERTIFIED FITNESS INSTRUCTORS NEED AN EASY WAY TO TAKE THE AWKWARDNESS OUT OF ATTENDANCE TAKING AND CLIENT PAYMENT PROCESSING.
            </p>
        </div>
    )
}
