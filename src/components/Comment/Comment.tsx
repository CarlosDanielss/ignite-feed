import { useState } from "react";

import { DateConversion } from "../../functions/DateConversion";

import { ThumbsUp, Trash } from "phosphor-react";

import { Avatar } from "../Avatar/Avatar";

import styles from "./Comment.module.css";

interface CommentProps {
  id: number;
  content: string;
  publishedAt: Date;
  onDeleteComment: (comment: number) => void;
}

export function Comment({
  id,
  content,
  publishedAt,
  onDeleteComment,
}: CommentProps) {
  const [likeCount, setLikeCount] = useState(0);

  const { dateFormatted, dateRelativeToNow, dateFormattedToIso } =
    DateConversion(publishedAt);

  function handleDeleteComment() {
    onDeleteComment(id);
  }

  function handleLikeComment() {
    setLikeCount((state) => {
      return state + 1;
    });
  }

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/CarlosDanielss.png" />

      <div className={styles.wrapper}>
        <div className={styles.content}>
          <header className={styles.header}>
            <div className={styles.authorAndTime}>
              <h2>Carlos Daniel</h2>
              <time title={dateFormatted} dateTime={dateFormattedToIso}>
                {dateRelativeToNow}
              </time>
            </div>
            <button onClick={handleDeleteComment} title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>
          <p>{content}</p>
        </div>

        <footer className={styles.footer}>
          <button onClick={handleLikeComment}>
            <ThumbsUp size={20} />
            Aplaudir
            <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
