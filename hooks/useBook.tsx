'use client';
import { BookContext } from '@/contexts/BookContext';
import { useContext } from 'react';

export function useBook() {
    const context = useContext(BookContext);
    if (!context) throw new Error('useBook must be used indise BookProvider');
    return context;
}
