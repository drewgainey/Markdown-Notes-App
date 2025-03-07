import { ActionButton } from '@/components';
import { deleteNoteAtom } from '@renderer/store';
import { useSetAtom } from 'jotai';
import { FaRegTrashCan } from 'react-icons/fa6';
import { ActionButtonProps } from './ActionButton';

export const DeleteNoteButton = ({ ...props }: ActionButtonProps) => {
  const deleteNote = useSetAtom(deleteNoteAtom);

  const handleDelete = () => {
    deleteNote();
  };
  return (
    <ActionButton onClick={handleDelete} {...props}>
      <FaRegTrashCan className="h-4 w-4 text-zinc-300" />
    </ActionButton>
  );
};
