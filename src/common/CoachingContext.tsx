// CoachingContext.tsx
import React, {
    createContext,
    ReactNode,
    useContext,
    useEffect,
    useState
} from 'react';

export type CoachingType = 'aktuelles' | 'neues' | null;

interface CoachingContextType {
    coachingType: CoachingType;
    setCoachingType: (type: CoachingType) => void;
}

const CoachingContext = createContext<CoachingContextType | undefined>(undefined);

export const useCoaching = () => {
    const context = useContext(CoachingContext);
    if (!context) {
        throw new Error('useCoaching must be used within a CoachingProvider');
    }
    return context;
};

interface CoachingProviderProps {
    children: ReactNode;
}

export const CoachingProvider: React.FC<CoachingProviderProps> = ({children}) => {
    const storedType = localStorage.getItem('coachingType');
    const initialType: CoachingType = (storedType === 'aktuelles' || storedType === 'neues') ? storedType : null;

    const [coachingType, setCoachingType] = useState<CoachingType>(initialType);

    useEffect(() => {
        if (coachingType) {
            localStorage.setItem('coachingType', coachingType);
        } else {
            localStorage.removeItem('coachingType');
        }
    }, [coachingType]);

    return (
        <CoachingContext.Provider value={{coachingType, setCoachingType}}>
            {children}
        </CoachingContext.Provider>
    );
};
