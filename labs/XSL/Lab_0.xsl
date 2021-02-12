<?xml version="1.0" encoding="utf-8" ?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="/">
<html><head><title></title></head>
<body style="background-color:gold">
<xsl:apply-templates/>
</body></html>
</xsl:template>
<xsl:template match="студент">
<xsl:choose>
<xsl:when test=" отметка[2] &lt; 4">
<p>Имя: <span style="color:red"><xsl:value-of select="@имя"/></span>
Веб-дизайн: <strong><em style="color:blue"><xsl:value-of select="отметка[2]"/></em></strong></p>
</xsl:when>
<xsl:otherwise>
<p>Имя: <span style="background-color:red"><xsl:value-of select="@имя"/></span>
Веб-дизайн: <strong><em style="color:blue"><xsl:value-of select="отметка[2]"/></em></strong></p>
</xsl:otherwise>
</xsl:choose>
</xsl:template>
</xsl:stylesheet>