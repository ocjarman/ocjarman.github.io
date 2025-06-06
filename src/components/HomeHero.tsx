import { Flex, Text } from '@radix-ui/themes';
import { motion } from 'framer-motion';

const HomeHero = () => {
  return (
    <Flex 
      direction="column" 
      align="center" 
      justify="center" 
      style={{ 
        height: '100vh',
        width: '100vw',
        padding: '2rem',
        position: 'fixed',
        top: 0,
        left: 0,
        overflow: 'hidden'
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{ maxWidth: '800px', width: '100%' }}
      >
        <Text 
          size="9" 
          style={{
            fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
            fontWeight: '700',
            letterSpacing: '-0.04em',
            marginBottom: '1rem',
            color: '#000000',
            textAlign: 'center',
            lineHeight: '1.1',
            display: 'block',
            wordBreak: 'break-word'
          }}
        >
          Olivia Jarman
        </Text>
        <Text
          size="5"
          style={{
            fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
            fontWeight: '500',
            letterSpacing: '-0.02em',
            color: '#333333',
            textAlign: 'center',
            marginBottom: '2rem',
            display: 'block',
            wordBreak: 'break-word'
          }}
        >
          Frontend Software Engineer
        </Text>
        <Text
          size="4"
          style={{
            fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
            fontWeight: '400',
            letterSpacing: '-0.01em',
            color: '#666666',
            textAlign: 'center',
            maxWidth: '600px',
            margin: '0 auto',
            lineHeight: '1.6',
            display: 'block',
            wordBreak: 'break-word'
          }}
        >
          Crafting beautiful and intuitive user experiences through clean code and thoughtful design.
        </Text>
      </motion.div>
    </Flex>
  );
};

export default HomeHero; 