
import * as React from 'react';
import { animated, useTransition } from 'react-spring';

export interface SectionlandingHeroProps {}


const AnimatedTitle: React.FC<{}> = () => {
    const [index, set] = React.useState(0);

    const slides = [
        {
            label: 'Ethereum',
            color: '#7694FF',
        },
        {
            label: 'Polygon',
            color: '#794FDD',
        },
        { label: 'BSC', color: '#F5AA15' },
        { label: 'Avalanche', color: '#FF3500' },
        { label: 'Fantom', color: '#a2f5eb' },
        { label: 'Celo', color: '#14b094' },
        { label: 'Optimism', color: '#FF3500' },
    ];

    const transitions = useTransition(index, {
        key: index,
        from: {
            transform: 'translate3d(0,50px,0)',
            opacity: 0,
        },
        enter: { transform: 'translate3d(0,0px,0)', opacity: 1 },
        leave: { transform: 'translate3d(0,-50px,0)', opacity: 0 },
    });

    React.useEffect(() => {
        const t = setInterval(() => {
            set((state) => {
                return (state + 1) % slides.length;
            });
        }, 1500);
        return () => clearTimeout(t);
    }, [slides.length]);

    return (
        <div>
            {transitions((style, i) => {
                return (
                    <animated.span
                        style={{
                            ...style,
                            position: 'absolute',
                            color: slides[i].color,
                        }}
                    >
                        {slides[i].label}
                    </animated.span>
                );
            })}
        </div>
    );
};

export default AnimatedTitle;