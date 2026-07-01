import { Button } from '~/components/button';
import { DecoderText } from '~/components/decoder-text';
import { Divider } from '~/components/divider';
import { Footer } from '~/components/footer';
import { Heading } from '~/components/heading';
import { Section } from '~/components/section';
import { Text } from '~/components/text';
import { tokens } from '~/components/theme-provider/theme';
import { Transition } from '~/components/transition';
import { baseMeta } from '~/utils/meta';
import { cssProps, msToNum, numToMs } from '~/utils/style';
import styles from './contact.module.css';

export const meta = () => {
  return baseMeta({
    title: 'Contact',
    description:
      'Contactez Yassine Salah, ingénieur d'affaires IT & événementiel.',
  });
};

export const Contact = () => {
  const initDelay = tokens.base.durationS;

  return (
    <Section className={styles.contact}>
      <Transition in timeout={1600}>
        {({ status, nodeRef }) => (
          <div className={styles.form} ref={nodeRef}>
            <Heading
              className={styles.title}
              data-status={status}
              level={3}
              as="h1"
              style={getDelay(tokens.base.durationXS, initDelay, 0.3)}
            >
              <DecoderText text="Prenons contact" start={status !== 'exited'} delay={300} />
            </Heading>
            <Divider
              className={styles.divider}
              data-status={status}
              style={getDelay(tokens.base.durationXS, initDelay, 0.4)}
            />
            <Text
              className={styles.input}
              data-status={status}
              size="l"
              as="p"
              style={getDelay(tokens.base.durationXS, initDelay)}
            >
              Une opportunité, une mission ou simplement l'envie d'échanger ? Écrivez-moi
              directement, je réponds sous 48h.
            </Text>
            <Button
              className={styles.button}
              data-status={status}
              style={getDelay(tokens.base.durationM, initDelay)}
              icon="send"
              href="mailto:salah-yassine@outlook.com"
            >
              salah-yassine@outlook.com
            </Button>
            <Button
              secondary
              className={styles.button}
              data-status={status}
              style={getDelay(tokens.base.durationL, initDelay)}
              href="https://www.linkedin.com/in/yassine-salah-0a928b264/"
            >
              Mon profil LinkedIn
            </Button>
          </div>
        )}
      </Transition>
      <Footer className={styles.footer} />
    </Section>
  );
};

function getDelay(delayMs, offset = numToMs(0), multiplier = 1) {
  const numDelay = msToNum(delayMs) * multiplier;
  return cssProps({ delay: numToMs((msToNum(offset) + numDelay).toFixed(0)) });
}
