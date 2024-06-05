import { NotePreview } from '@/components';
import { useNotesList } from '@/hooks/useNotesList';
import { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';

export type NotePreviewListProps = ComponentProps<'ul'> & {
  onSelect?: () => void;
};

export const NotePreviewList = ({ className, onSelect, ...props }: NotePreviewListProps) => {
  const { notes, selectedNoteIndex, handleNotesSelect } = useNotesList({ onSelect });

  if (notes.length === 0) {
    return (
      <ul className={twMerge('text-center pt-4', className)} {...props}>
        <span>No Notes Yet!</span>
      </ul>
    );
  }

  return (
    <ul className={className} {...props}>
      {notes.map((note, index) => (
        <NotePreview
          key={note.title + note.lastEditTime}
          isActive={selectedNoteIndex === index}
          onClick={handleNotesSelect(index)}
          {...note}
        />
      ))}
    </ul>
  );
};
