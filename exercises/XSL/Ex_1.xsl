<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
<xsl:template match="/">
<html>
<script src="https://polyfill.io/v3/polyfill.min.js?features=es6">&#160;</script>
<script id="MathJax-script" src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js">&#160;</script>
<math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
<xsl:apply-templates/>
</math>
</html>
</xsl:template>
  <xsl:template match="строка">
    <mrow><xsl:apply-templates select="@*|node()" /></mrow>
  </xsl:template>
  <xsl:template match="операнд">
    <mi><xsl:apply-templates select="@*|node()" /></mi>
  </xsl:template>
  <xsl:template match="оператор">
    <mo><xsl:apply-templates select="@*|node()" /></mo>
  </xsl:template>
  <xsl:template match="корень">
    <msqrt><xsl:apply-templates select="@*|node()" /></msqrt>
  </xsl:template>
  <xsl:template match="дробь">
    <mfrac><xsl:apply-templates select="@*|node()" /></mfrac>
  </xsl:template>
  <xsl:template match="число">
    <mn><xsl:apply-templates select="@*|node()" /></mn>
  </xsl:template>
  <xsl:template match="низверх">
    <munderover><xsl:apply-templates select="@*|node()" /></munderover>
  </xsl:template>
  <xsl:template match="верх">
    <msup><xsl:apply-templates select="@*|node()" /></msup>
  </xsl:template>
  <xsl:template match="низ">
    <msub><xsl:apply-templates select="@*|node()" /></msub>
  </xsl:template>
</xsl:stylesheet>