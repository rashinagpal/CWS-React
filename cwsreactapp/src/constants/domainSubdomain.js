export const domainOptionsImpairment = [
  { value: 'All', label: 'All'},
  { value: 'MENTAL FUNCTIONS', label: 'MENTAL FUNCTIONS'},
  { value: 'SENSORY FUNCTIONS AND PAIN', label: 'SENSORY FUNCTIONS AND PAIN'},
  { value: 'VOICE AND SPEECH FUNCTIONS', label: 'VOICE AND SPEECH FUNCTIONS'},
  { value: 'FUNCTIONS OF THE CARDIOVASCULAR, HAEMATOLOGICAL IMMUNOLOGICAL AND RESPIRATORY SYSTEMS', label: 'FUNCTIONS OF THE CARDIOVASCULAR, HAEMATOLOGICAL IMMUNOLOGICAL AND RESPIRATORY SYSTEMS'},
  { value: 'FUNCTIONS OF THE DIGESTIVE, METABOLIC AND ENDOCRINE SYSTEMS', label: 'FUNCTIONS OF THE DIGESTIVE, METABOLIC AND ENDOCRINE SYSTEMS'},
  { value: 'GENITOURINARY AND REPRODUCTIVE FUNCTIONS', label: 'GENITOURINARY AND REPRODUCTIVE FUNCTIONS'},
  { value: 'NEUROMUSCULOSKELETAL AND MOVEMENT RELATED FUNCTIONS', label: 'NEUROMUSCULOSKELETAL AND MOVEMENT RELATED FUNCTIONS'},
]
export const subdomainOptionsImpairment = [
  { value: 'All', link : 'All', label: 'All'},
  { value: 'All', link : 'MENTAL FUNCTIONS', label: 'All'},
  {
  definition : 'General mental functions of the state of awareness and alertness, including the clarity and continuity of the wakeful state.\n\nInclusions: functions of the state, continuity and quality of consciousness; loss of consciousness, coma, vegetative states, fugues, trance states, possession states, drug-induced altered consciousness, delirium, stupor\n\nExclusions: orientation functions (b114); energy and drive functions (b130); sleep functions (b134)',
  id : 'b110',
  label : 'Consciousness',
  link : 'MENTAL FUNCTIONS',
  value : 'Consciousness'
}, {
  definition : 'General mental functions of knowing and ascertaining ones relation to self, to others, to time and to ones surroundings.\n\nInclusions: functions of orientation to time, place and person; orientation to self and others; disorientation to time, place and person\n\nExclusions: consciousness functions (b110); attention functions (b140); memory functions (b144)',
  id : 'b114',
  label : 'Orientation',
  link : 'MENTAL FUNCTIONS',
  value : 'Orientation'
}, {
  definition : 'General mental functions of constitutional disposition of the individual to react in a particular way to situations, including the set of mental characteristics that makes the individual distinct from others.\n\nInclusions: functions of extraversion, introversion, agreeableness, conscientiousness, psychic and emotional stability, and openness to experience; optimism; novelty seeking; confidence; trustworthiness\n\nExclusions: intellectual functions (b117); energy and drive functions (b130); psychomotor functions (b147); emotional functions (b152)',
  id : 'b126',
  label : 'Temperament and personality',
  link : 'MENTAL FUNCTIONS',
  value : 'Temperament and personality'
}, {
  definition : 'General mental functions of physiological and psychological mechanisms that cause the individual to move towards satisfying specific needs and general goals in a persistent manner.\n\nInclusions: functions of energy level, motivation, appetite, craving (including craving for substances that can be abused) and impulse control\n\nExclusions: consciousness functions (b110); temperament and personality functions (b126); sleep functions (b134); psychomotor functions (b147); emotional functions (b152)',
  id : 'b130',
  label : 'Energy and drive functions',
  link : 'MENTAL FUNCTIONS',
  value : 'Energy and drive functions'
}, {
  definition : 'General mental functions of periodic, reversible and selective physical and mental disengagement from ones immediate environment accompanied by characteristic physiological changes.\n\nInclusions: functions of amount of sleeping, and onset, maintenance and quality of sleep; functions involving the sleep cycle, such as in insomnia, hypersomnia and narcolepsy\n\nExclusions: consciousness functions (b110); energy and drive functions (b130); attention functions (b140); psychomotor functions (b147)',
  id : 'b134',
  label : 'Sleep',
  link : 'MENTAL FUNCTIONS',
  value : 'Sleep'
}, {
  definition : 'Specific mental functions of focusing on an external stimulus or internal experience for the required period of time.\n\nInclusions: functions of sustaining attention, shifting attention, dividing attention, sharing attention; concentration; distractibility\n\nExclusions: consciousness functions (b110); energy and drive functions (b130); sleep functions (b134); memory functions (b144); psychomotor functions (b147); perceptual functions (b156)',
  id : 'b140',
  label : 'Attention',
  link : 'MENTAL FUNCTIONS',
  value : 'Attention'
}, {
  definition : 'Specific mental functions of registering and storing information and retrieving it as needed.\n\nInclusions: functions of short-term and long-term memory, immediate, recent and remote memory; memory span; retrieval of memory; remembering; functions used in recalling and learning, such as in nominal, selective and dissociative amnesia\n\nExclusions: consciousness functions (b110); orientation functions (b114); intellectual functions (b117); attention functions (b140); perceptual functions (b156); thought functions (b160); higher-level cognitive functions (b164); mental functions of language (b167); calculation functions (b172)',
  id : 'b144',
  label : 'Memory',
  link : 'MENTAL FUNCTIONS',
  value : 'Memory'
}, {
  definition : 'Specific mental functions of control over both motor and psychological events at the body level.\n\nInclusions: functions of psychomotor control, such as psychomotor retardation, excitement and agitation, posturing, catatonia, negativism, ambitendency, echopraxia and echolalia; quality of psychomotor function\n\nExclusions: consciousness functions (b110); orientation functions (b114); intellectual functions (b117); energy and drive functions (b130); attention functions (b140); mental functions of language (b167); mental functions of sequencing complex movements (b176)',
  id : 'b147',
  label : 'Psychomotor functions',
  link : 'MENTAL FUNCTIONS',
  value : 'Psychomotor functions'
}, {
  definition : 'Specific mental functions related to the feeling and affective components of the processes of the mind.\n\nInclusions: functions of appropriateness of emotion, regulation and range of emotion; affect; sadness, happiness, love, fear, anger, hate, tension, anxiety, joy, sorrow; lability of emotion; flattening of affect\n\nExclusions: temperament and personality functions (b126); energy and drive functions (b130)',
  id : 'b152',
  label : 'Emotional functions',
  link : 'MENTAL FUNCTIONS',
  value : 'Emotional functions'
}, {
  definition : 'Specific mental functions of recognizing and interpreting sensory stimuli.\n\nInclusions: functions of auditory, visual, olfactory, gustatory, tactile and visuospatial perception, such as a hallucination or illusion\n\nExclusions: consciousness functions (b110); orientation functions (b114); attention functions (b140); memory functions (b144); mental functions of language (b167); seeing and related functions (b210-b229); hearing and vestibular functions (b230-b249); additional sensory functions (b250-b279)',
  id : 'b156',
  label : 'Perceptual functions',
  link : 'MENTAL FUNCTIONS',
  value : 'Perceptual functions'
}, {
  definition : 'Specific mental functions related to the ideational component of the mind.\n\nInclusions: functions of pace, form, control and content of thought; goal-directed thought functions, non-goal directed thought functions; logical thought functions, such as pressure of thought, flight of ideas, thought block, incoherence of thought, tangentiality, circumstantiality, delusions, obsessions and compulsions\n\nExclusions: intellectual functions (b117); memory functions (b144); psychomotor functions (b147); perceptual functions (b156); higher-level cognitive functions (b164); mental functions of language (b167); calculation functions (b172)',
  id : 'b160',
  label : 'Thought',
  link : 'MENTAL FUNCTIONS',
  value : 'Thought'
}, {
  definition : 'Specific mental functions especially dependent on the frontal lobes of the brain, including complex goal-directed behaviours such as decision-making, abstract thinking, planning and carrying out plans, mental flexibility, and deciding which behaviours are appropriate under what circumstances; often called executive functions.\n\nInclusions: functions of abstraction and organization of ideas; time management, insight and judgement; concept formation, categorization and cognitive flexibility\n\nExclusions: memory functions (b144); thought functions (b160); mental functions of language (b167); calculation functions (b172)',
  id : 'b164',
  label : 'Higher-level cognitive functions',
  link : 'MENTAL FUNCTIONS',
  value : 'Higher-level cognitive functions'
}, {
  definition : 'Specific mental functions of recognizing and using signs, symbols and other components of a language.\n\nInclusions: functions of reception and decryption of spoken, written or other forms of language such as sign language; functions of expression of spoken, written or other forms of language; integrative language functions, spoken and written, such as involved in receptive, expressive, Broca?s, Wernicke?s and conduction aphasia\n\nExclusions: attention functions (b140); memory functions (b144); perceptual functions (b156); thought functions (b160); higher-level cognitive functions (b164); calculation functions (b172); mental functions of complex movements (b176); Chapter 2 Sensory Functions and Pain; Chapter 3 Voice and Speech Functions',
  id : 'b167',
  label : 'Language',
  link : 'MENTAL FUNCTIONS',
  value : 'Language'
}, 
{ value: 'All', link : 'SENSORY FUNCTIONS AND PAIN', label: 'All'},
{
  definition : 'Sensory functions relating to sensing the presence of light and sensing the form, size, shape and colour of the visual stimuli.\n\nInclusions: visual acuity functions; visual field functions; quality of vision; functions of sensing light and colour, visual acuity of distant and near vision, monocular and binocular vision; visual picture quality; impairments such as myopia, hypermetropia, astigmatism, hemianopia, colour-blindness, tunnel vision, central and peripheral scotoma, diplopia, night blindness and impaired adaptability to light\n\nExclusion: perceptual functions (b156)',
  id : 'b210',
  label : 'Seeing',
  link : 'SENSORY FUNCTIONS AND PAIN',
  value : 'Seeing'
}, {
  definition : 'Functions of structures in and around the eye that facilitate seeing functions.\n\nInclusions: functions of internal muscles of the eye, eyelid, external muscles of the eye, including voluntary and tracking movements and fixation of the eye, lachrymal glands, accommodation, pupillary reflex; impairments such as in nystagmus, xerophthalmia and ptosis\n\nExclusions: seeing functions (b210); Chapter 7 Neuromusculoskeletal and Movement-related Functions',
  id : 'b215',
  label : 'Structures adjoining the eye',
  link : 'SENSORY FUNCTIONS AND PAIN',
  value : 'Structures adjoining the eye'
}, {
  definition : 'Sensory functions of the inner ear related to position, balance and movement.\n\nInclusions: functions of position and positional sense; functions of balance of the body and movement\n\nExclusion: sensations associated with hearing and vestibular functions (b240)',
  id : 'b235',
  label : 'Vestibular',
  link : 'SENSORY FUNCTIONS AND PAIN',
  value : 'Vestibular'
}, {
  definition : 'Sensations of dizziness, falling, tinnitus and vertigo.\n\nInclusions: sensations of ringing in ears, irritation in ear, aural pressure, nausea associated with dizziness or vertigo\n\nExclusions: vestibular functions (b235); sensation of pain (b280))',
  id : 'b240',
  label : 'Sensations associated with hearing and vestibular',
  link : 'SENSORY FUNCTIONS AND PAIN',
  value : 'Sensations associated with hearing and vestibular'
}, {
  definition : 'Sensory functions of sensing odours and smells.\n\nInclusions: olfactory functions; impairments such as anosmia or hyposmia',
  id : 'b255',
  label : 'Smell',
  link : 'SENSORY FUNCTIONS AND PAIN',
  value : 'Smell'
}, {
  definition : 'Sensory functions of sensing the relative position of body parts.\n\nInclusions: functions of statesthesia and kinaesthesia\n\nExclusions: vestibular functions (b235); sensations related to muscles and movement functions (b780)',
  id : 'b260',
  label : 'Proprioceptive function',
  link : 'SENSORY FUNCTIONS AND PAIN',
  value : 'Proprioceptive function'
}, {
  definition : 'Sensation of unpleasant feeling indicating potential or actual damage to some body structure.\n\nInclusions: sensations of generalized or localized pain in one or more body part, pain in a dermatome, stabbing pain, burning pain, dull pain, aching pain; impairments such as myalgia, analgesia and hyperalgesia',
  id : 'b280',
  label : 'Pain',
  link : 'SENSORY FUNCTIONS AND PAIN',
  value : 'Pain'
},
{ value: 'All', link : 'VOICE AND SPEECH FUNCTIONS', label: 'All'},
 {
  definition : 'Functions of the production of various sounds by the passage of air through the larynx.\n\nInclusions: functions of production and quality of voice; functions of phonation, pitch, loudness and other qualities of voice; impairments such as aphonia, dysphonia, hoarseness, hypernasality and hyponasality\n\nExclusions: mental functions of language (b167); articulation functions (b320)',
  id : 'b310',
  label : 'Voice',
  link : 'VOICE AND SPEECH FUNCTIONS',
  value : 'Voice'
}, {
  definition : 'Functions of the production of speech sounds.\n\nInclusions: functions of enunciation, articulation of phonemes; spastic, ataxic, flaccid dysarthria; anarthria\n\nExclusions: mental functions of language (b167); voice functions (b310)',
  id : 'b320',
  label : 'Articulation',
  link : 'VOICE AND SPEECH FUNCTIONS',
  value : 'Articulation'
}, {
  definition : 'Functions of the production of flow and tempo of speech.\n\nInclusions: functions of fluency, rhythm, speed and melody of speech; prosody and intonation; impairments such as stuttering, stammering, cluttering, bradylalia and tachylalia\n\nExclusions: mental functions of language (b167); voice functions (b310); articulation functions (b320',
  id : 'b330',
  label : 'Fluency and rhythm of speech',
  link : 'VOICE AND SPEECH FUNCTIONS',
  value : 'Fluency and rhythm of speech'
},
{ value: 'All', link : 'FUNCTIONS OF THE CARDIOVASCULAR, HAEMATOLOGICAL, IMMUNOLOGICAL AND RESPIRATORY SYSTEMS', label: 'All'},
 {
  definition : 'Functions of maintaining the pressure of blood within the arteries.\n\nInclusions: functions of maintenance of blood pressure; increased and decreased blood pressure; impairments such as in hypotension, hypertension and postural hypotension\n\nExclusions: heart functions (b410); blood vessel functions (b415); exercise tolerance functions (b455)',
  id : 'b420',
  label : 'Blood pressure',
  link : 'FUNCTIONS OF THE CARDIOVASCULAR, HAEMATOLOGICAL, IMMUNOLOGICAL AND RESPIRATORY SYSTEMS',
  value : 'Blood pressure'
}, {
  definition : 'Functions related to respiratory and cardiovascular capacity as required for enduring physical exertion.\n\nInclusions: functions of physical endurance, aerobic capacity, stamina and fatigability\n\nExclusions: functions of the cardiovascular system (b410-b429); haematological system functions (b430); respiration functions (b440); respiratory muscle functions (b445); additional respiratory functions (b450)',
  id : 'b455',
  label : 'Exercise tolerance',
  link : 'FUNCTIONS OF THE CARDIOVASCULAR, HAEMATOLOGICAL, IMMUNOLOGICAL AND RESPIRATORY SYSTEMS',
  value : 'Exercise tolerance'
},
{ value: 'All', link : 'FUNCTIONS OF THE DIGESTIVE, METABOLIC AND ENDOCRINE SYSTEMS', label: 'All'},
 {
  definition : 'Functions related to taking in and manipulating solids or liquids through the mouth into the body.\n\nInclusions: functions of sucking, chewing and biting, manipulating food in the mouth, salivation, swallowing, burping, regurgitation, spitting and vomiting; impairments such as dysphagia, aspiration of food, aerophagia, excessive salivation, drooling and insufficient salivation\n\nExclusion: sensations associated with digestive system (b535)',
  id : 'b510',
  label : 'Ingestion',
  link : 'FUNCTIONS OF THE DIGESTIVE, METABOLIC AND ENDOCRINE SYSTEMS',
  value : 'Ingestion'
}, {
  definition : 'Functions of elimination of wastes and undigested food as faeces and related functions.\n\nInclusions: functions of elimination, faecal consistency, frequency of defecation; faecal continence, flatulence; impairments such as constipation, diarrhoea, watery stool and anal sphincter incompetence or incontinence\n\nExclusions: digestive functions (b515); assimilation functions (b520); sensations associated with the digestive system (b535)',
  id : 'b525',
  label : 'Defecation',
  link : 'FUNCTIONS OF THE DIGESTIVE, METABOLIC AND ENDOCRINE SYSTEMS',
  value : 'Defecation'
}, {
  definition : 'Functions of production and regulation of hormonal levels in the body, including cyclical changes.\n\nInclusions: functions of hormonal balance; hyperpituitarism, hypopituitarism, hyperthyroidism, hypothyroidism, hyperadrenalism, hypoadrenalism, hyperparathyroidism, hypoparathyroidism, hypergonadism, hypogonadism\n\nExclusions: general metabolic functions (b540); water, mineral and electrolyte balance functions (b545); thermoregulatory functions (b550); sexual functions (b640); menstruation functions (b650)',
  id : 'b555',
  label : 'Endocrine glands',
  link : 'FUNCTIONS OF THE DIGESTIVE, METABOLIC AND ENDOCRINE SYSTEMS',
  value : 'Endocrine glands'
}, 
{ value: 'All', link : 'GENITOURINARY AND REPRODUCTIVE FUNCTIONS', label: 'All'},
{
  definition : 'Functions of discharge of urine from the urinary bladder.\n\nInclusions: functions of urination, frequency of urination, urinary continence; impairments such as in stress, urge, reflex, overflow, continuous incontinence, dribbling, automatic bladder, polyuria, urinary retention and urinary urgency\n\nExclusions: urinary excretory functions (b610); sensations associated with urinary functions (b630)',
  id : 'b620',
  label : 'Urination functions',
  link : 'GENITOURINARY AND REPRODUCTIVE FUNCTIONS',
  value : 'Urination functions'
}, {
  definition : 'Mental and physical functions related to the sexual act, including the arousal, preparatory, orgasmic and resolution stages.\n\nInclusions: functions of the sexual arousal, preparatory, orgasmic and resolution phase: functions related to sexual interest, performance, penile erection, clitoral erection, vaginal lubrication, ejaculation, orgasm; impairments such as in impotence, frigidity, vaginismus, premature ejaculation, priapism and delayed ejaculation\n\nExclusions: procreation functions (b660); sensations associated with genital and reproductive functions (b670)',
  id : 'b640',
  label : 'Sexual functions',
  link : 'GENITOURINARY AND REPRODUCTIVE FUNCTIONS',
  value : 'Sexual functions'
},
{ value: 'All', link : 'NEUROMUSCULOSKELETAL AND MOVEMENT RELATED FUNCTIONS', label: 'All'},
 {
  definition : 'Functions of the range and ease of movement of a joint.\n\nInclusions: functions of mobility of single or several joints, vertebral, shoulder, elbow, wrist, hip, knee, ankle, small joints of hands and feet; mobility of joints generalized; impairments such as in hypermobility of joints, frozen joints, frozen shoulder, arthritis\n\nExclusions: stability of joint functions (b715); control of voluntary movement functions (b760)',
  id : 'b710',
  label : 'Mobility of joint',
  link : 'NEUROMUSCULOSKELETAL AND MOVEMENT RELATED FUNCTIONS',
  value : 'Mobility of joint'
}, {
  definition : 'Functions related to the force generated by the contraction of a muscle or muscle groups.\n\nInclusions: functions associated with the power of specific muscles and muscle groups, muscles of one limb, one side of the body, the lower half of the body, all limbs, the trunk and the body as a whole; impairments such as weakness of small muscles in feet and hands, muscle paresis, muscle paralysis, monoplegia, hemiplegia, paraplegia, quadriplegia and akinetic mutism\n\nExclusions: functions of structures adjoining the eye (b215); muscle tone functions (b735); muscle endurance functions (b740)',
  id : 'b730',
  label : 'Muscle power',
  link : 'NEUROMUSCULOSKELETAL AND MOVEMENT RELATED FUNCTIONS',
  value : 'Muscle power'
}, {
  definition : 'Functions related to the tension present in the resting muscles and the resistance offered when trying to move the muscles passively.\n\nInclusions: functions associated with the tension of isolated muscles and muscle groups, muscles of one limb, one side of the body and the lower half of the body, muscles of all limbs, muscles of the trunk, and all muscles of the body; impairments such as hypotonia, hypertonia and muscle spasticity\n\nExclusions: muscle power functions (b730); muscle endurance functions (b740)',
  id : 'b735',
  label : 'Muscle tone',
  link : 'NEUROMUSCULOSKELETAL AND MOVEMENT RELATED FUNCTIONS',
  value : 'Muscle tone'
}, {
  definition : 'Functions of involuntary contractions of large muscles or the whole body induced by body position, balance and threatening stimuli.\n\nInclusions: functions of postural reactions, righting reactions, body adjustment reactions, balance reactions, supporting reactions, defensive reactions\n\nExclusion: motor reflex functions (b750)',
  id : 'b755',
  label : 'Involuntary movement reaction',
  link : 'NEUROMUSCULOSKELETAL AND MOVEMENT RELATED FUNCTIONS',
  value : 'Involuntary movement reaction'
}, {
  definition : 'Functions associated with control over and coordination of voluntary movements.\n\nInclusions: functions of control of simple voluntary movements and of complex voluntary movements, coordination of voluntary movements, supportive functions of arm or leg, right left motor coordination, eye hand coordination, eye foot coordination; impairments such as control and coordination problems, e.g. dysdiadochokinesia\n\nExclusions: muscle power functions (b730); involuntary movement functions (b765); gait pattern functions (b770)',
  id : 'b760',
  label : 'Control of voluntary movement',
  link : 'NEUROMUSCULOSKELETAL AND MOVEMENT RELATED FUNCTIONS',
  value : 'Control of voluntary movement'
}, {
  definition : 'Functions of unintentional, non- or semi-purposive involuntary contractions of a muscle or group of muscles.\n\nInclusions: involuntary contractions of muscles; impairments such as tremors, tics, mannerisms, stereotypies, motor perseveration, chorea, athetosis, vocal tics, dystonic movements and dyskinesia\n\nExclusions: control of voluntary movement functions (b760); gait pattern functions (b770)',
  id : 'b765',
  label : 'Involuntary movements',
  link : 'NEUROMUSCULOSKELETAL AND MOVEMENT RELATED FUNCTIONS',
  value : 'Involuntary movements'
}, {
  definition : 'Functions of movement patterns associated with walking, running or other whole body movements.\n\nInclusions: walking patterns and running patterns; impairments such as spastic gait, hemiplegic gait, paraplegic gait, asymmetric gait, limping and stiff gait pattern\n\nExclusions: muscle power functions (b730); muscle tone functions (b735); control of voluntary movement functions (b760); involuntary movement functions (b765)',
  id : 'b770',
  label : 'Gait pattern',
  link : 'NEUROMUSCULOSKELETAL AND MOVEMENT RELATED FUNCTIONS',
  value : 'Gait pattern'
},
]

export const domainOptionsCapPer = [
  { value: 'All', label: 'All'},
  { value: 'LEARNING AND APPLYING KNOWLEDGE', label: 'LEARNING AND APPLYING KNOWLEDGE'},
  { value: 'SENSORY FUNCTIONS AND PAIN', label: 'SENSORY FUNCTIONS AND PAIN'},
  { value: 'VOICE AND SPEECH FUNCTIONS', label: 'VOICE AND SPEECH FUNCTIONS'},
  { value: 'FUNCTIONS OF THE CARDIOVASCULAR, HAEMATOLOGICAL IMMUNOLOGICAL AND RESPIRATORY SYSTEMS', label: 'FUNCTIONS OF THE CARDIOVASCULAR, HAEMATOLOGICAL IMMUNOLOGICAL AND RESPIRATORY SYSTEMS'},
  { value: 'FUNCTIONS OF THE DIGESTIVE, METABOLIC AND ENDOCRINE SYSTEMS', label: 'FUNCTIONS OF THE DIGESTIVE, METABOLIC AND ENDOCRINE SYSTEMS'},
  { value: 'GENITOURINARY AND REPRODUCTIVE FUNCTIONS', label: 'GENITOURINARY AND REPRODUCTIVE FUNCTIONS'},
  { value: 'NEUROMUSCULOSKELETAL AND MOVEMENT RELATED FUNCTIONS', label: 'NEUROMUSCULOSKELETAL AND MOVEMENT RELATED FUNCTIONS'},
]

export const domainOptionsEnv = [
  { value: 'All', label: 'All'},
  { value: 'PRODUCTS AND TECHNOLOGY', label: 'PRODUCTS AND TECHNOLOGY'},
  { value: 'NATURAL ENVIRONMENT AND HUMAN MADE CHANGES TO ENVIRONMENT', label: 'NATURAL ENVIRONMENT AND HUMAN MADE CHANGES TO ENVIRONMENT'},
  { value: 'SUPPORT AND RELATIONSHIPS', label: 'SUPPORT AND RELATIONSHIPS'},
  { value: 'ATTITUDES', label: 'ATTITUDES'},
  { value: 'SERVICES, SYSTEMS AND POLICIES', label: 'SERVICES, SYSTEMS AND POLICIES'},
  { value: 'ANY OTHER ENVIRONMENTAL FACTORS', label: 'ANY OTHER ENVIRONMENTAL FACTORS'},
]

export const subdomainOptionsCapPer = [ {

  label : 'All',
  link : 'LEARNING AND APPLYING KNOWLEDGE',
  value : 'All'
},{

  label : 'Watching',
  link : 'LEARNING AND APPLYING KNOWLEDGE',
  value : 'Watching'
}, {

  label : 'Listening',
  link : 'LEARNING AND APPLYING KNOWLEDGE',
  value : 'Listening'
}
]