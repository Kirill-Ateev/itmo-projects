<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
<xsl:template match="/">
<xsl:apply-templates/>
</xsl:template>


<xsl:template match="@*|node()">
<xsl:copy>
<xsl:apply-templates select="@*|node()"/>
</xsl:copy>
</xsl:template>

<xsl:template match="/root/графика/@ширина">
<xsl:attribute name="width">
<xsl:value-of select="." />
</xsl:attribute>
</xsl:template> 

<xsl:template match="/root/графика/@высота">
<xsl:attribute name="height">
<xsl:value-of select="." />
</xsl:attribute>
</xsl:template> 

<xsl:template match="/root/графика/эллипс/@заливка">
<xsl:attribute name="fill">
<xsl:value-of select="." />
</xsl:attribute>
</xsl:template> 

<xsl:template match="/root/графика/эллипс/@ободок">
<xsl:attribute name="stroke">
<xsl:value-of select="." />
</xsl:attribute>
</xsl:template> 

<xsl:template match="/root/графика/эллипс/@ширина-ободка">
<xsl:attribute name="stroke-width">
<xsl:value-of select="." />
</xsl:attribute>
</xsl:template> 



<xsl:template match="графика">
<svg><xsl:apply-templates select="@*|node()" /></svg>
</xsl:template>

<xsl:template match="графика/эллипс">
<ellipse><xsl:apply-templates select="@*|node()" /></ellipse>
</xsl:template>

</xsl:stylesheet>