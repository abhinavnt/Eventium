import React from 'react';
import { cn } from '@/lib/utils';

interface LoadingProps {
    variant?: 'spinner' | 'dots' | 'pulse' | 'wave' | 'orbit' | 'ripple' | 'matrix' | 'galaxy';
    size?: 'sm' | 'md' | 'lg' | 'xl';
    className?: string;
    text?: string;
}

const Loading: React.FC<LoadingProps> = ({
    variant = 'spinner',
    size = 'md',
    className,
    text
}) => {
    const sizeClasses = {
        sm: 'w-8 h-8',
        md: 'w-12 h-12',
        lg: 'w-20 h-20',
        xl: 'w-28 h-28'
    };

    const containerSizeClasses = {
        sm: 'gap-1',
        md: 'gap-2',
        lg: 'gap-3',
        xl: 'gap-4'
    };

    const renderSpinner = () => (
        <div className="relative">
            <div className={cn(
                'relative rounded-full bg-gradient-to-r from-violet-600 via-purple-500 to-violet-400 p-1 shadow-2xl',
                sizeClasses[size]
            )}>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-violet-600 to-purple-600 animate-spin opacity-75 blur-sm" />
                <div className="relative rounded-full bg-black border-2 border-violet-400/30 h-full w-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-gradient-to-r from-violet-400 to-purple-400 rounded-full animate-pulse" />
                </div>
            </div>
            <div className={cn(
                'absolute inset-0 rounded-full bg-gradient-to-r from-violet-600/10 to-purple-600/10 animate-ping',
                sizeClasses[size]
            )} />
        </div>
    );

    const renderMatrix = () => (
        <div className={cn('relative', sizeClasses[size])}>
            <div className="absolute inset-0 grid grid-cols-3 gap-1 animate-pulse">
                {Array.from({ length: 9 }).map((_, i) => (
                    <div
                        key={i}
                        className="bg-gradient-to-b from-violet-500 to-purple-600 rounded-sm opacity-70"
                        style={{
                            animation: `matrix-fade 1.5s infinite ease-in-out`,
                            animationDelay: `${i * 0.1}s`
                        }}
                    />
                ))}
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-violet-600/20 to-purple-600/20 rounded-lg animate-pulse blur-xl" />
        </div>
    );

    const renderGalaxy = () => (
        <div className={cn('relative', sizeClasses[size])}>
            <div className="absolute inset-0 rounded-full">
                {Array.from({ length: 8 }).map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-1 h-1 bg-gradient-to-r from-violet-400 to-purple-500 rounded-full shadow-lg"
                        style={{
                            top: '50%',
                            left: '50%',
                            transform: `rotate(${i * 45}deg) translateY(-${size === 'sm' ? '16px' : size === 'md' ? '24px' : size === 'lg' ? '40px' : '56px'})`,
                            animation: `galaxy-orbit 2s linear infinite`,
                            animationDelay: `${i * 0.25}s`
                        }}
                    />
                ))}
                <div className="absolute inset-4 rounded-full bg-gradient-to-r from-violet-600 to-purple-500 animate-pulse opacity-50" />
                <div className="absolute inset-6 rounded-full bg-gradient-to-r from-purple-400 to-violet-400 animate-spin opacity-75" />
            </div>
        </div>
    );

    const renderDots = () => (
        <div className={cn('flex space-x-2', containerSizeClasses[size])}>
            {[0, 1, 2].map((i) => (
                <div
                    key={i}
                    className={cn(
                        'rounded-full bg-gradient-to-r from-violet-500 to-purple-600 shadow-xl',
                        size === 'sm' ? 'w-3 h-3' : size === 'md' ? 'w-4 h-4' : size === 'lg' ? 'w-6 h-6' : 'w-8 h-8'
                    )}
                    style={{
                        animation: `bounce-modern 1.4s infinite ease-in-out both`,
                        animationDelay: `${i * 0.16}s`
                    }}
                />
            ))}
        </div>
    );

    const renderPulse = () => (
        <div className="relative">
            <div className={cn(
                'rounded-full bg-gradient-to-r from-violet-600 via-purple-500 to-violet-400 shadow-2xl',
                sizeClasses[size]
            )}>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-violet-600/40 to-purple-600/40 animate-ping" />
                <div className="absolute inset-2 rounded-full bg-gradient-to-r from-purple-400 to-violet-400 animate-pulse" />
                <div className="absolute inset-4 rounded-full bg-white/20 animate-pulse" />
            </div>
        </div>
    );

    const renderWave = () => (
        <div className={cn('flex items-end space-x-1', containerSizeClasses[size])}>
            {[0, 1, 2, 3, 4].map((i) => (
                <div
                    key={i}
                    className={cn(
                        'bg-gradient-to-t from-violet-600 via-purple-500 to-violet-400 rounded-t-lg shadow-lg',
                        size === 'sm' ? 'w-2' : size === 'md' ? 'w-3' : size === 'lg' ? 'w-4' : 'w-6'
                    )}
                    style={{
                        height: size === 'sm' ? '16px' : size === 'md' ? '24px' : size === 'lg' ? '36px' : '48px',
                        animation: `wave-modern 1.2s infinite ease-in-out`,
                        animationDelay: `${i * 0.1}s`,
                        transformOrigin: 'bottom'
                    }}
                />
            ))}
        </div>
    );

    const renderOrbit = () => (
        <div className={cn('relative', sizeClasses[size])}>
            <div className="absolute inset-0 rounded-full border-2 border-violet-500/30 animate-spin">
                <div className="absolute -top-2 -left-2 w-4 h-4 bg-gradient-to-r from-violet-500 to-purple-600 rounded-full shadow-xl animate-pulse" />
            </div>
            <div className="absolute inset-3 rounded-full border-2 border-purple-500/40 animate-spin" style={{ animationDirection: 'reverse', animationDuration: '3s' }}>
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-gradient-to-r from-purple-400 to-violet-400 rounded-full shadow-lg" />
            </div>
            <div className="absolute inset-6 rounded-full bg-gradient-to-r from-violet-600/20 to-purple-600/20 animate-pulse" />
        </div>
    );

    const renderRipple = () => (
        <div className={cn('relative', sizeClasses[size])}>
            {[0, 1, 2].map((i) => (
                <div
                    key={i}
                    className="absolute inset-0 rounded-full border-2 border-violet-500/60"
                    style={{
                        animation: `ripple-modern 2s infinite ease-out`,
                        animationDelay: `${i * 0.5}s`
                    }}
                />
            ))}
            <div className="absolute inset-3 rounded-full bg-gradient-to-r from-violet-600 to-purple-500 shadow-2xl animate-pulse" />
        </div>
    );

    const renderLoader = () => {
        switch (variant) {
            case 'matrix':
                return renderMatrix();
            case 'galaxy':
                return renderGalaxy();
            case 'dots':
                return renderDots();
            case 'pulse':
                return renderPulse();
            case 'wave':
                return renderWave();
            case 'orbit':
                return renderOrbit();
            case 'ripple':
                return renderRipple();
            default:
                return renderSpinner();
        }
    };

    return (
        <>
            <style>{`
        @keyframes wave-modern {
          0%, 40%, 100% { transform: scaleY(0.4); opacity: 0.5; }
          20% { transform: scaleY(1.2); opacity: 1; }
        }
        @keyframes ripple-modern {
          0% { transform: scale(0.8); opacity: 0.8; }
          100% { transform: scale(2.4); opacity: 0; }
        }
        @keyframes bounce-modern {
          0%, 80%, 100% { transform: scale(0.8); opacity: 0.5; }
          40% { transform: scale(1.2); opacity: 1; }
        }
        @keyframes matrix-fade {
          0%, 100% { opacity: 0.3; transform: scaleY(0.5); }
          50% { opacity: 1; transform: scaleY(1.2); }
        }
        @keyframes galaxy-orbit {
          0% { transform: rotate(0deg) translateY(-${size === 'sm' ? '16px' : size === 'md' ? '24px' : size === 'lg' ? '40px' : '56px'}) rotate(0deg); opacity: 0.3; }
          50% { opacity: 1; }
          100% { transform: rotate(360deg) translateY(-${size === 'sm' ? '16px' : size === 'md' ? '24px' : size === 'lg' ? '40px' : '56px'}) rotate(-360deg); opacity: 0.3; }
        }
      `}</style>
            <div className={cn(
                'flex flex-col items-center justify-center space-y-4',
                className
            )}>
                <div className="relative">
                    {renderLoader()}
                    <div className="absolute inset-0 bg-gradient-to-r from-violet-600/10 to-purple-600/10 rounded-full blur-2xl animate-pulse" />
                </div>
                {text && (
                    <p className={cn(
                        'text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-purple-400 to-violet-300 font-bold tracking-wider animate-pulse',
                        size === 'sm' ? 'text-xs' : size === 'md' ? 'text-sm' : size === 'lg' ? 'text-base' : 'text-lg'
                    )}>
                        {text}
                    </p>
                )}
            </div>
        </>
    );
};

export default Loading;