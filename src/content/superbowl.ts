import type { Fact, Round } from '@/content/types';

type Game = [id: string, title: string, blurb: string, bowl: string, year: number, month: number, day: number];

const GAMES: Game[] = [
  ['starr-chiefs', 'Bart Starr', 'Leads the Packers past the Chiefs in the Los Angeles Coliseum.', 'Super Bowl I', 1967, 1, 15],
  ['starr-raiders', 'Bart Starr', 'Leads the Packers past the Raiders in Miami.', 'Super Bowl II', 1968, 1, 14],
  ['namath', 'Joe Namath', 'Guarantees a win, then the Jets beat the Colts.', 'Super Bowl III', 1969, 1, 12],
  ['dawson', 'Len Dawson', 'Leads the Chiefs past the Vikings.', 'Super Bowl IV', 1970, 1, 11],
  ['unitas', 'Johnny Unitas', 'Comes off the bench, and the Colts beat the Cowboys.', 'Super Bowl V', 1971, 1, 17],
  ['staubach-dolphins', 'Roger Staubach', 'Leads the Cowboys past the Dolphins.', 'Super Bowl VI', 1972, 1, 16],
  ['griese-redskins', 'Bob Griese', 'The Dolphins finish the season unbeaten against the Redskins.', 'Super Bowl VII', 1973, 1, 14],
  ['griese-vikings', 'Bob Griese', 'The Dolphins beat the Vikings.', 'Super Bowl VIII', 1974, 1, 13],
  ['bradshaw-vikings', 'Terry Bradshaw', 'The Steelers beat the Vikings.', 'Super Bowl IX', 1975, 1, 12],
  ['bradshaw-cowboys-1', 'Terry Bradshaw', 'Lynn Swann’s catches help the Steelers beat the Cowboys.', 'Super Bowl X', 1976, 1, 18],
  ['stabler', 'Ken Stabler', 'The Raiders beat the Vikings.', 'Super Bowl XI', 1977, 1, 9],
  ['staubach-broncos', 'Roger Staubach', 'The Cowboys beat the Broncos.', 'Super Bowl XII', 1978, 1, 15],
  ['bradshaw-cowboys-2', 'Terry Bradshaw', 'A rematch with the Cowboys goes the Steelers’ way.', 'Super Bowl XIII', 1979, 1, 21],
  ['bradshaw-rams', 'Terry Bradshaw', 'The Steelers beat the Rams.', 'Super Bowl XIV', 1980, 1, 20],
  ['plunkett-eagles', 'Jim Plunkett', 'The Raiders beat the Eagles.', 'Super Bowl XV', 1981, 1, 25],
  ['montana-silverdome', 'Joe Montana', 'The 49ers hold off the Bengals in the Silverdome.', 'Super Bowl XVI', 1982, 1, 24],
  ['theismann', 'Joe Theismann', 'John Riggins and the Redskins beat the Dolphins.', 'Super Bowl XVII', 1983, 1, 30],
  ['plunkett-redskins', 'Jim Plunkett', 'Marcus Allen and the Raiders beat the Redskins.', 'Super Bowl XVIII', 1984, 1, 22],
  ['montana-dolphins', 'Joe Montana', 'The 49ers rout the Dolphins.', 'Super Bowl XIX', 1985, 1, 20],
  ['mcmahon', 'Jim McMahon', 'The Bears’ defense overwhelms the Patriots.', 'Super Bowl XX', 1986, 1, 26],
  ['simms', 'Phil Simms', 'A near-perfect day of passing carries the Giants past the Broncos.', 'Super Bowl XXI', 1987, 1, 25],
  ['doug-williams', 'Doug Williams', 'The Redskins score 35 points in one quarter against the Broncos.', 'Super Bowl XXII', 1988, 1, 31],
  ['montana-drive', 'Joe Montana', 'A last-minute drive beats the Bengals.', 'Super Bowl XXIII', 1989, 1, 22],
  ['montana-broncos', 'Joe Montana', 'The 49ers crush the Broncos.', 'Super Bowl XXIV', 1990, 1, 28],
  ['hostetler', 'Jeff Hostetler', 'A missed field goal at the end leaves the Giants ahead of the Bills.', 'Super Bowl XXV', 1991, 1, 27],
  ['rypien', 'Mark Rypien', 'The Redskins beat the Bills.', 'Super Bowl XXVI', 1992, 1, 26],
  ['aikman-bills-1', 'Troy Aikman', 'A rout of the Bills opens a run of Cowboy titles.', 'Super Bowl XXVII', 1993, 1, 31],
  ['aikman-bills-2', 'Troy Aikman', 'Emmitt Smith grinds down the Bills.', 'Super Bowl XXVIII', 1994, 1, 30],
  ['steve-young', 'Steve Young', 'The 49ers rout the Chargers.', 'Super Bowl XXIX', 1995, 1, 29],
  ['aikman-steelers', 'Troy Aikman', 'Larry Brown’s interceptions help the Cowboys beat the Steelers.', 'Super Bowl XXX', 1996, 1, 28],
  ['favre', 'Brett Favre', 'Desmond Howard’s kick return helps the Packers beat the Patriots.', 'Super Bowl XXXI', 1997, 1, 26],
  ['elway-packers', 'John Elway', 'Terrell Davis runs through the Packers.', 'Super Bowl XXXII', 1998, 1, 25],
  ['elway-falcons', 'John Elway', 'The Broncos beat the Falcons.', 'Super Bowl XXXIII', 1999, 1, 31],
  ['warner', 'Kurt Warner', 'A tackle at the one-yard line saves the Rams against the Titans.', 'Super Bowl XXXIV', 2000, 1, 30],
  ['dilfer', 'Trent Dilfer', 'The Ravens’ defense smothers the Giants.', 'Super Bowl XXXV', 2001, 1, 28],
  ['brady-rams-1', 'Tom Brady', 'Adam Vinatieri’s kick beats the Rams.', 'Super Bowl XXXVI', 2002, 2, 3],
  ['brad-johnson', 'Brad Johnson', 'The Buccaneers’ defense beats the Raiders.', 'Super Bowl XXXVII', 2003, 1, 26],
  ['brady-panthers', 'Tom Brady', 'A back-and-forth game with the Panthers ends on a kick.', 'Super Bowl XXXVIII', 2004, 2, 1],
  ['brady-eagles', 'Tom Brady', 'A goal-line interception helps the Patriots beat the Eagles.', 'Super Bowl XXXIX', 2005, 2, 6],
  ['ben-seahawks', 'Ben Roethlisberger', 'The Steelers beat the Seahawks.', 'Super Bowl XL', 2006, 2, 5],
  ['peyton-bears', 'Peyton Manning', 'The Colts beat the Bears in the rain.', 'Super Bowl XLI', 2007, 2, 4],
  ['eli-18-0', 'Eli Manning', 'A helmet catch helps the Giants beat an unbeaten team.', 'Super Bowl XLII', 2008, 2, 3],
  ['ben-cardinals', 'Ben Roethlisberger', 'A late touchdown catch beats the Cardinals.', 'Super Bowl XLIII', 2009, 2, 1],
  ['brees', 'Drew Brees', 'An onside kick helps the Saints beat the Colts.', 'Super Bowl XLIV', 2010, 2, 7],
  ['rodgers', 'Aaron Rodgers', 'The Packers beat the Steelers.', 'Super Bowl XLV', 2011, 2, 6],
  ['eli-patriots', 'Eli Manning', 'A late throw beats the Patriots.', 'Super Bowl XLVI', 2012, 2, 5],
  ['flacco', 'Joe Flacco', 'A power outage interrupts the Ravens’ win over the 49ers.', 'Super Bowl XLVII', 2013, 2, 3],
  ['wilson-broncos', 'Russell Wilson', 'The Seahawks blow out the Broncos.', 'Super Bowl XLVIII', 2014, 2, 2],
  ['brady-seahawks', 'Tom Brady', 'A goal-line interception saves the Patriots against the Seahawks.', 'Super Bowl XLIX', 2015, 2, 1],
  ['peyton-panthers', 'Peyton Manning', 'The Broncos’ defense beats the Panthers.', 'Super Bowl 50', 2016, 2, 7],
  ['brady-falcons', 'Tom Brady', 'The Patriots erase a 28-point deficit against the Falcons.', 'Super Bowl LI', 2017, 2, 5],
  ['foles', 'Nick Foles', 'A trick-play touchdown helps the Eagles beat the Patriots.', 'Super Bowl LII', 2018, 2, 4],
  ['brady-rams-2', 'Tom Brady', 'A field goal is enough against the Rams.', 'Super Bowl LIII', 2019, 2, 3],
  ['mahomes-49ers-1', 'Patrick Mahomes', 'The Chiefs come back on the 49ers.', 'Super Bowl LIV', 2020, 2, 2],
  ['brady-chiefs', 'Tom Brady', 'The Buccaneers beat the Chiefs.', 'Super Bowl LV', 2021, 2, 7],
  ['stafford', 'Matthew Stafford', 'A late stand beats the Bengals.', 'Super Bowl LVI', 2022, 2, 13],
  ['mahomes-eagles', 'Patrick Mahomes', 'The Chiefs beat the Eagles.', 'Super Bowl LVII', 2023, 2, 12],
  ['mahomes-49ers-2', 'Patrick Mahomes', 'The Chiefs beat the 49ers in overtime.', 'Super Bowl LVIII', 2024, 2, 11],
  ['hurts', 'Jalen Hurts', 'The Eagles rout the Chiefs.', 'Super Bowl LIX', 2025, 2, 9],
  ['darnold', 'Sam Darnold', 'The Seahawks’ defense buries the Patriots.', 'Super Bowl LX', 2026, 2, 8],
];

const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

function toFact([id, title, blurb, bowl, year, month, day]: Game): Fact {
  return {
    id,
    title,
    blurb,
    dateLabel: `${MONTHS[month - 1]} ${day}, ${year}`,
    sortKey: year * 10000 + month * 100 + day,
    revealNote: bowl,
  };
}

const facts = GAMES.map(toFact);

const ROUNDS: Array<[id: string, title: string, start: number, end: number]> = [
  ['superbowl-merger', 'Packers, Jets, and Steelers', 0, 10],
  ['superbowl-dynasties', 'Raiders, 49ers, and the Bears', 10, 20],
  ['superbowl-nineties', 'Giants, 49ers, and Cowboys', 20, 30],
  ['superbowl-turn', 'Broncos, Rams, and Patriots', 30, 40],
  ['superbowl-passing', 'Colts, Giants, and Seahawks', 40, 50],
  ['superbowl-latest', 'Comebacks and repeat champions', 50, 60],
];

export const superBowlRounds: Round[] = ROUNDS.map(([id, title, start, end]) => ({
  id,
  title,
  facts: facts.slice(start, end),
}));
