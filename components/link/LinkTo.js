import React from 'react';
import Link from 'next/link';

import s from './LinkTo.module.scss';

export default function LinkTo({ path, name }) {
  return (
    <Link href={{ pathname: path }}>
      <a className={s.link}> {name ? name : 'LEARN MORE'}</a>
    </Link>
  );
}
