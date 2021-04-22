import {useState, useContext, useEffect} from 'react'
import { useHistory } from 'react-router';
import Button from '../components/Button.js'
import { SettingsContext } from '../states/SettingsContext.js';

const StartGame = () => {

    let [getNum, setNum] = useState(1)

    const [getSettings, setSettings] = useContext(SettingsContext)

    const incrementNum = () => {
        if(getNum < 10) setNum((getNum+1))
    }

    const decrementNum = () => {
        if(getNum > 1) setNum((getNum-1))
    }

    const startGame = () => {
        console.log('katt')
       setSettings({...getSettings, started: true, questions: getNum})
    }


    return (
        <div className='flex-grow flex flex-col justify-between items-center mt-32 md:mt-40 mb-10 text-base sm:text-xl md:text-2xl'>
            <div className='container mx-auto text-center flex-row flex justify-between custom-container p-10 items-center'>
                <div>Number of questions:</div>
                <div className='flex flex-col'>
                    <Button text={
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                        </svg>
                    } p={'0'} onClick={incrementNum}/>
                    
                    <span>{getNum}</span>

                    <Button text={
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    } p={'0'} onClick={decrementNum}/>

                </div>
            </div>
            <Button color={'transparent'} border={true} text={'Let\'s start!'} onClick={startGame} link={'/game'}/>
        </div>
    )
}

export default StartGame
