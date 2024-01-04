import dayjs from 'dayjs'
import { Typography } from 'antd'
import { useEffect, useState } from 'react'

const { Text } = Typography

const Hero = () => {
  const [realTime, setRealTime] = useState(dayjs())

  useEffect(() => {
    const intervalId = setInterval(() => {
      setRealTime(dayjs())
    }, 1000)

    return () => clearInterval(intervalId)
  }, [])

  return (
    <div
      style={{
        height: 500,
        position: 'relative',
        backgroundColor: '#00DBDE',
        backgroundImage: 'linear-gradient(90deg, #00DBDE 0%, #FC00FF 100%)'
      }}
    >
        <div 
          style={{
            width: '100%',
            background: '#111111',
            transform: 'rotate(-30deg)',
            border: '10px solid #EEEEEE',
            position: 'absolute',
            left: -100,
            top: -900,
            borderRadius: 20,
            height: 960,
          }}
        >
          <div style={{ position: 'absolute', bottom: 130, transform: 'rotate(90deg)', left: -70 }}>
            <Text style={{ color: '#12AC14', fontSize: 16, transform: 'rotate(-40deg)' }}>
              {realTime.format('MMMM D, YYYY HH:mm:ss')}
            </Text>
          </div>
          <div style={{ position: 'absolute', bottom: 0, left: 50 }}>
            <Text style={{ color: '#12AC14', fontSize: 40, fontWeight: 500 }}>
              {'< SPE / FRONTEND >'}
            </Text>
          </div>
      </div>
    </div>
  )
}

export default Hero