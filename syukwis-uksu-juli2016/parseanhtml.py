# Parsing an html file using BeautifulSoup

from bs4 import BeautifulSoup
from urllib.parse import urlparse, parse_qs

def modifyHrefTag(url):
    #obtain fbid using urllib.parse
    parsedUrl = urlparse(url)
    print(parsedUrl)
    urlQuery = parsedUrl[4]
    print("    query is %s" %(urlQuery))
    parsedUrlQuery = parse_qs(urlQuery)
    fbidParam = parsedUrlQuery["fbid"][0]
    print("    fbid is %s" %(fbidParam))

    #the url (whose href attribute is modified) is..
    modifiedUrl = "https://www.facebook.com/photo/download/?fbid=" + fbidParam

    print("modifiedUrl is %s" %(modifiedUrl))
    
    return modifiedUrl

def main(htmlfilename):
    f = open(htmlfilename, 'r')
    fstr = f.read()
    f.close()

    soup = BeautifulSoup(fstr)


    counter = 0
    for tag in soup.find_all('a', class_='_39pi _4i6j'):
        print(tag)
        counter += 1
        print("Modifying tag..")
        hrefStr = tag["href"]
        tag["href"] = modifyHrefTag(hrefStr)
        #temporarily stop the for loop. For now..
        #if(counter >= 4):
        #    break

#    print(len(soup.contents))
#    print(len(str(soup.html)))
    modifiedHtml = open(htmlfilename[:-5]+" (modified).html", "w")
    completeModifiedHtml = str(soup.html)
    modifiedHtml.write(completeModifiedHtml)
    modifiedHtml.close()
    
    print("Found a total of %i <a> tag(s) whose class_ is _39pi _4i6j" %(counter))
    

    



if(__name__ == '__main__'):
    import sys
    htmlfilename = sys.argv[1]

    print("Attempting to evaluate " + htmlfilename + "...")

    main(htmlfilename)

