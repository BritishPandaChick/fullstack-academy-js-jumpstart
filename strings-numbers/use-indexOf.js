var seasons = "Winter, Spring, Summer, Fall";

seasons.indexOf("p");
//return 9 - index for p string

seasons.indexOf("z");
//returns -1 = default value for does not exist

seasons.indexOf("s");
//returns -1 since different value and case sensitive

seasons.indexOf("Spring");
//return 8 bc begins at 8 index

seasons.indexOf("Fall");
//returns at 24

seasons.indexOf("W", 6);
//return at -1 bc starting point is at 6 index

seasons.indexOf("W", 0);
//returns 0 bc it is starting point also same as just using "W"
