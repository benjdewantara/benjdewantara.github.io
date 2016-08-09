from bs4 import BeautifulSoup



def prettifier(htmlfilename):
    f = open(htmlfilename, 'r')
    fstr = f.read()
    f.close()

    soup = BeautifulSoup(fstr)
    
    prettifiedFile = open(htmlfilename[:-5]+" (pretiffied).html", 'w')
    prettifiedStr = soup.prettify()
    prettifiedFile.write(prettifiedStr)
    prettifiedFile.close()


if(__name__ == '__main__'):
    import sys
    htmlfilename = sys.argv[1]

    print("Attempting to prettify " + htmlfilename + "...")

    prettifier(htmlfilename)
