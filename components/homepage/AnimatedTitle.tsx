
import * as React from 'react';
import { animated, useTransition } from 'react-spring';

export interface SectionlandingHeroProps {}


const AnimatedTitle: React.FC<{}> = () => {
    const [index, set] = React.useState(0);

    const slides = [
        { label: 'Bitcoin', color: '#F7931A' },
        { label: 'Ethereum', color: '#7694FF'},
        { label: 'Solana', color: '#794FDD'},
        { label: 'Tether', color: '#14b094' },
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
        <div style={{
            height: '90px',
            overflow: 'hidden',
            display: 'inline-block',
            position: 'absolute',
            width: '30%',
            paddingLeft: '1rem'
        }}>
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